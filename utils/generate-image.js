const widths = [200, 400, 800, 1200, 1600];
const root = "http://powerstationofart.com/img/"
const name = process.argv[2];
const ratio = process.argv[3] || 2 / 3;
const url = size => `${root}${name}_${size}.jpg`;

process.stdout.write(JSON.stringify({
    ratio,
    placeholder: url('placeholder'),
    srcset: widths.map(width => ({ width, height: Math.floor(width * ratio), url: url(width) }))
}))