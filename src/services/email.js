export function openMailLink(subjectLine) {
  if (typeof window !== 'undefined') {
    window.location.href = `mailto:${encodeURIComponent(makeSandwich())}?subject=${encodeURIComponent(subjectLine)}`;
  }

  // NOTE: this might be needed for iOS to handle link properly
  return false;
}

function makeSandwich() {
  const zxc = '@ttoill';
  const asd = 'moc.';
  const qwe = 'fiedler.elliott';

  return `e${slicedBread(zxc)}${peanutButterAndJelly(qwe)}${slicedBread(asd)}`;
}

function slicedBread(str) {
  let result = '';

  for (let i = str.length - 1; i > -1; i -= 1) {
    result += str[i];
  }

  return result;
}

function peanutButterAndJelly(str) {
  return `${str.substr(8)}${str.substr(0, 7)}`;
}

