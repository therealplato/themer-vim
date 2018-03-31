export const render = (colors) => {

  const colorVars = colorSet => `
  let s:shade0 = "${colorSet.shade0}"
  let s:shade1 = "${colorSet.shade1}"
  let s:shade2 = "${colorSet.shade2}"
  let s:shade3 = "${colorSet.shade3}"
  let s:shade4 = "${colorSet.shade4}"
  let s:shade5 = "${colorSet.shade5}"
  let s:shade6 = "${colorSet.shade6}"
  let s:shade7 = "${colorSet.shade7}"
  let s:accent0 = "${colorSet.accent0}"
  let s:accent1 = "${colorSet.accent1}"
  let s:accent2 = "${colorSet.accent2}"
  let s:accent3 = "${colorSet.accent3}"
  let s:accent4 = "${colorSet.accent4}"
  let s:accent5 = "${colorSet.accent5}"
  let s:accent6 = "${colorSet.accent6}"
  let s:accent7 = "${colorSet.accent7}"
  `;

  const cterm = () => `
  let s:caccent0 = "DarkRed"
  let s:caccent1 = "LightRed"
  let s:caccent2 = "DarkYellow"
  let s:caccent3 = "DarkGreen"
  let s:caccent4 = "DarkCyan"
  let s:caccent5 = "DarkBlue"
  let s:caccent6 = "DarkMagenta"
  let s:caccent7 = "LightCyan"
  `;

  const ctermlight = () => `
  let s:cshade0 = "White"
  let s:cshade1 = "LightMagenta"
  let s:cshade2 = "LightGrey"
  let s:cshade3 = "LightBlue"
  let s:cshade4 = "DarkGrey"
  let s:cshade5 = "LightYellow"
  let s:cshade6 = "LightGreen"
  let s:cshade7 = "Black"
  `+cterm();

  const ctermdark = () => `
  let s:cshade0 = "Black"
  let s:cshade1 = "LightGreen"
  let s:cshade2 = "LightYellow"
  let s:cshade3 = "DarkGrey"
  let s:cshade4 = "LightBlue"
  let s:cshade5 = "LightGrey"
  let s:cshade6 = "LightMagenta"
  let s:cshade7 = "White"
  `+cterm();

  const theme = `

  ${'dark' in colors ? `
  if &background == 'dark'
    ${colorVars(colors.dark)}
    ${ctermdark()}
  endif
  ` : ''}

  ${'light' in colors ? `
  if &background == 'light'
    ${colorVars(colors.light)}
    ${ctermlight()}
  endif
  ` : ''}


  highlight clear
  syntax reset
  let g:colors_name = "ThemerVim"

  """"""""""
  " Normal "
  """"""""""

  exec "hi Normal guifg=".s:shade6." guibg=".s:shade0." ctermbg=".s:cshade0." ctermfg=".s:cshade6

  """""""""""""""""
  " Syntax groups "
  """""""""""""""""

  " Default

  exec "hi Comment guifg=".s:shade2." ctermfg=".s:cshade2
  exec "hi Constant guifg=".s:accent3." ctermfg=".s:caccent3
  exec "hi Character guifg=".s:accent4." ctermfg=".s:caccent4
  exec "hi Identifier guifg=".s:accent2." ctermfg=".s:caccent2." gui=none cterm=none"
  exec "hi Statement guifg=".s:accent5." ctermfg=".s:caccent5
  exec "hi PreProc guifg=".s:accent6." ctermfg=".s:caccent6
  exec "hi Type guifg=".s:accent7." ctermfg=".s:caccent7
  exec "hi Special guifg=".s:accent4." ctermfg=".s:caccent4
  exec "hi Underlined guifg=".s:accent5." ctermfg=".s:caccent5
  exec "hi Error guifg=".s:accent0." ctermfg=".s:caccent0." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi Todo guifg=".s:accent0." ctermfg=".s:caccent0." guibg=".s:shade1

  " GitGutter

  exec "hi GitGutterAdd guifg=".s:accent3." ctermfg=".s:caccent3
  exec "hi GitGutterChange guifg=".s:accent2." ctermfg=".s:caccent2
  exec "hi GitGutterChangeDelete guifg=".s:accent2." ctermfg=".s:caccent2
  exec "hi GitGutterDelete guifg=".s:accent0." ctermfg=".s:caccent0

  " fugitive

  exec "hi gitcommitComment guifg=".s:shade3." ctermfg=".s:cshade3
  exec "hi gitcommitOnBranch guifg=".s:shade3." ctermfg=".s:cshade3
  exec "hi gitcommitHeader guifg=".s:shade5." ctermfg=".s:cshade5
  exec "hi gitcommitHead guifg=".s:shade3." ctermfg=".s:cshade3
  exec "hi gitcommitSelectedType guifg=".s:accent3." ctermfg=".s:caccent3
  exec "hi gitcommitSelectedFile guifg=".s:accent3." ctermfg=".s:caccent3
  exec "hi gitcommitDiscardedType guifg=".s:accent2." ctermfg=".s:caccent2
  exec "hi gitcommitDiscardedFile guifg=".s:accent2." ctermfg=".s:caccent2
  exec "hi gitcommitUntrackedFile guifg=".s:accent0." ctermfg=".s:caccent0

  """""""""""""""""""""""
  " Highlighting Groups "
  """""""""""""""""""""""

  " Default

  exec "hi ColorColumn guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi Conceal guifg=".s:shade2." ctermfg=".s:cshade2
  exec "hi Cursor guifg=".s:shade0." ctermfg=".s:cshade0
  exec "hi CursorColumn guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi CursorLine guibg=".s:shade1." ctermbg=".s:cshade1." cterm=none"
  exec "hi Directory guifg=".s:accent5." ctermfg=".s:caccent5
  exec "hi DiffAdd guifg=".s:accent3." ctermfg=".s:caccent3." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi DiffChange guifg=".s:accent2." ctermfg=".s:caccent2." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi DiffDelete guifg=".s:accent0." ctermfg=".s:caccent0." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi DiffText guifg=".s:accent2." ctermfg=".s:caccent2." guibg=".s:shade2." ctermbg=".s:cshade2
  exec "hi ErrorMsg guifg=".s:shade7." ctermfg=".s:cshade7." guibg=".s:accent0." ctermbg=".s:caccent0
  exec "hi VertSplit guifg=".s:shade0." ctermfg=".s:cshade0." guibg=".s:shade3." ctermbg=".s:cshade3
  exec "hi Folded guifg=".s:shade4." ctermfg=".s:cshade4." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi FoldColumn guifg=".s:shade4." ctermfg=".s:cshade4." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi SignColumn guibg=".s:shade0." ctermbg=".s:cshade0
  exec "hi IncSearch guifg=".s:shade0." ctermfg=".s:cshade0." guibg=".s:accent2
  exec "hi LineNr guifg=".s:shade2." ctermfg=".s:cshade2." guibg=".s:shade0." ctermbg=".s:cshade0
  exec "hi CursorLineNr guifg=".s:shade3." ctermfg=".s:cshade3." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi MatchParen guibg=".s:shade2." ctermbg=".s:cshade2
  exec "hi MoreMsg guifg=".s:shade0." ctermfg=".s:cshade0." guibg=".s:accent4." ctermbg=".s:caccent4
  exec "hi NonText guifg=".s:shade2." ctermfg=".s:cshade2." guibg=".s:shade0." ctermbg=".s:cshade0
  exec "hi Pmenu guifg=".s:shade6." ctermfg=".s:cshade6." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi PmenuSel guifg=".s:accent4." ctermfg=".s:caccent4." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi PmenuSbar guifg=".s:accent3." ctermfg=".s:caccent3." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi PmenuThumb guifg=".s:accent0." ctermfg=".s:caccent0." guibg=".s:shade2." ctermbg=".s:cshade2
  exec "hi Question guifg=".s:shade7." ctermfg=".s:cshade7." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi Search guifg=".s:shade0." ctermfg=".s:cshade0." guibg=".s:accent2." ctermbg=".s:caccent2
  exec "hi SpecialKey guifg=".s:accent7." ctermfg=".s:caccent7." guibg=".s:shade0." ctermbg=".s:cshade0
  exec "hi SpellBad guifg=".s:accent0." ctermfg=".s:caccent0
  exec "hi SpellCap guifg=".s:accent2." ctermfg=".s:caccent2
  exec "hi SpellLocal guifg=".s:accent4." ctermfg=".s:caccent4
  exec "hi SpellRare guifg=".s:accent1." ctermfg=".s:caccent1
  exec "hi StatusLine guifg=".s:shade4." ctermfg=".s:cshade4." guibg=".s:shade1." ctermbg=".s:cshade1." gui=none cterm=none"
  exec "hi TabLine guifg=".s:shade5." ctermfg=".s:cshade5." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi TabLineFill guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi TabLineSel guifg=".s:shade6." ctermfg=".s:cshade6." guibg=".s:shade0." ctermbg=".s:cshade0
  exec "hi Title guifg=".s:accent5." ctermfg=".s:caccent5
  exec "hi Visual guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi VisualNOS guifg=".s:accent0." ctermfg=".s:caccent0." guibg=".s:shade1." ctermbg=".s:cshade1
  exec "hi WarningMsg guifg=".s:accent0." ctermfg=".s:caccent0
  exec "hi WildMenu guifg=".s:accent4." ctermfg=".s:caccent4." guibg=".s:shade1." ctermbg=".s:cshade1

  " NERDTree

  exec "hi NERDTreeExecFile guifg=".s:accent4." ctermfg=".s:caccent4
  exec "hi NERDTreeDirSlash guifg=".s:accent5." ctermfg=".s:caccent5
  exec "hi NERDTreeCWD guifg=".s:accent0." ctermfg=".s:caccent0

  """"""""""""
  " Clean up "
  """"""""""""

  unlet s:shade0 s:shade1 s:shade2 s:shade3 s:shade4 s:shade5 s:shade6 s:shade7 s:accent0 s:accent1 s:accent2 s:accent3 s:accent4 s:accent5 s:accent6 s:accent7
  `;

  return [Promise.resolve({name: 'ThemerVim.vim', contents: Buffer.from(theme, 'utf8')})];

};
