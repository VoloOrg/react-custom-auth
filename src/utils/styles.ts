export const combineClassNames = (...classNames: (string | false | undefined)[]): string => {
  if (!classNames?.length) return ''
  return classNames.filter((className) => !!className).join(' ')
}

export const getRootStyleSheet = () => {
  const rootStyleSheet = getComputedStyle(document.getElementById('root') as HTMLElement)

  return (property: string) => rootStyleSheet.getPropertyValue(property)
}
