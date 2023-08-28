const fs = require('fs');
const path = require('path');

function inlining(sectionId = 'introduction-root') {
  const buildJSPath = path.join(__dirname, 'build/static/js');
  const buildCSSPath = path.join(__dirname, 'build/static/css');

  const jsFile = fs.readdirSync(buildJSPath).find((file) => file.endsWith('.js'));
  const cssFile = fs.readdirSync(buildCSSPath).find((file) => file.endsWith('.css'));

  const js = fs.readFileSync(path.join(buildJSPath, jsFile), 'utf-8');
  const css = fs.readFileSync(path.join(buildCSSPath, cssFile), 'utf-8');

  const template = `<style>{{ style }}</style><div id="${sectionId}"></div><script>{{ script }}</script>`

  const replaced = 
    template
      .replace('{{ script }}', js)
      .replace('{{ style }}', css);
  
  fs.writeFileSync(path.join(__dirname, 'code.txt'), replaced);
}

inlining();
