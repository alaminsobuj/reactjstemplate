import React from 'react'

export default function Clipboard() {
   const CopyText=()=>{
      alert('copy');
   }
   const CutText=()=>{
      alert('cut');
   }
   const PasteEvent=()=>{
      alert('PasteEvent');
   }
    return (
    <>
      <p onCopy={CopyText}>resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid  Line 595:73:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid  Line 638:25:   elements must have a unique title property</p>
      <p onCut={CutText}>resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid  Line 595:73:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid  Line 638:25:   elements must have a unique title property</p>
      <p ><input name=''  onPaste={PasteEvent} id='' placeholder='hello word' type='text' /></p>
    </>
  )
}
