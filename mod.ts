export async function validURL(str: string): Promise<boolean> {
  try {
    new URL(str);
  } catch (_) {
    return false;  
  }
  return true;
}

export async function humanizeUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}
