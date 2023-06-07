// import { useEffect, useState } from 'react'

// // interface TextSelection {
// //     text: string;
// //     start: number;
// //     end: number;
// //   }

// export const useTextSelection = () => {
//   const [range, setRange] = useState(null)

//   const handleSelectionChange = () => {
//     const selection = getSelection()
//     if (!selection || selection.isCollapsed || !selection.containsNode(ref.current, true)) {
//       setRange(null)
//       return
//     }

//     setRange(selection.getRangeAt(0))
//   }

//   useEffect(() => {
//     // setSelection(document.getSelection())
//     document.addEventListener('selectionchange', handleSelectionChange)
//     return () => document.removeEventListener('selectionchange', handleSelectionChange)
//   }, [])

//   return range
// }
