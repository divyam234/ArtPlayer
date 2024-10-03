export type VttResult = {
    start: number;
    end: number;
    url: string;
    h: number;
    w: number;
    x: number;
    y: number;
    [key: string]: string | number;
  };
  
  export default async function getVttArray(vttUrl: string): Promise<VttResult[]> {
    const vttString: string = await (await fetch(vttUrl)).text();
    const lines: string[] = vttString.split(/[\n\r]/gm).filter((item) => item.trim());
    const vttArray: VttResult[] = [];
  
    for (let i = 1; i < lines.length; i += 2) {
      const time = lines[i];
      const text = lines[i + 1];
  
      if (!text.trim()) {
        continue;
      }
  
      const timeReg =
        /((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)(?: ?--> ?)((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)/;
      const timeMatch = time.match(timeReg);
  
      const textReg = /(.*)#(\w{4})=(.*)/i;
      const textMatch = text.match(textReg);
  
      if (timeMatch && textMatch) {
        const start = Math.floor(t2d(timeMatch[1]));
        const end = Math.floor(t2d(timeMatch[2]));
  
        let url: string = textMatch[1];
        const isAbsoluteUrl: boolean = /^\/|((https?|ftp|file):\/\/)/i.test(url);
        if (!isAbsoluteUrl) {
          const u = new URL(vttUrl);
          const pathArr = u.pathname.split("/");
          pathArr.pop();
          pathArr.push(url);
          u.pathname = pathArr.join("/");
          url = u.href;
        }
  
        const result = { start, end, url } as VttResult;
  
        const keys: string[] = textMatch[2].split("");
        const values: string[] = textMatch[3].split(",");
  
        for (let j = 0; j < keys.length; j++) {
          result[keys[j]] = values[j];
        }
  
        vttArray.push(result);
      }
    }
  
    return vttArray;
  }
  
  function padEnd(str: string, targetLength: number, padString: string): string {
    if (str.length > targetLength) {
      return String(str);
    }
    targetLength = targetLength - str.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length);
    }
    return String(str) + padString.slice(0, targetLength);
  }
  
  function t2d(time: string): number {
    const arr = time.split(".");
    const left = arr[0].split(":") || [];
    const right = padEnd(arr[1] || "0", 3, "0");
    const ms = Number(right) / 1000;
  
    const h = Number(left[left.length - 3] || 0) * 3600;
    const m = Number(left[left.length - 2] || 0) * 60;
    const s = Number(left[left.length - 1] || 0);
    return h + m + s + ms;
  }