const base = {
  enter: 'transition-opacity duration-150',
  leave: 'transition-opacity duration-150'
}

export const fade = {
  ...base,
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0'
}
