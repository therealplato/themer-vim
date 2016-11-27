A vim theme template for mjswensen/themer.

## Installation & usage

Install this module wherever you have `themer` installed:

    yarn add themer-vim

Then pass `themer-vim` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-vim -o gen

`themer-vim` will generate a `themer-vim.vim` file, which you should copy (or symlink) to `~/.vim/colors/`.