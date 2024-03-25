const base = {
  enter: 'transition-all duration-150',
  leave: 'transition-all duration-150'
}

export const fade = {
  ...base,
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0'
}

export const scale = {
  ...base,
  enterFrom: 'transform scale-95 opacity-0',
  enterTo: 'transform scale-100 opacity-100',
  leaveFrom: 'transform scale-100 opacity-100',
  leaveTo: 'transform scale-95 opacity-0'
}
