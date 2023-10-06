import { useState } from 'react'

export function LongTxt({ txt, length, showReadMore }) {
    const [isLongTxtShown, setLongTxtShown] = useState(false)

    function getTxtToShow(isLongTxtShown, txt, length, ) {
        return txt.length < length || isLongTxtShown ? txt : txt.substring(0, length) + '...'
    }

    function onToggleLongTxt() {
        setLongTxtShown((prevLongTxtShown) => !prevLongTxtShown)
    }

    return (
        <div className='long-text'>
            <p className="book-desc">{getTxtToShow(isLongTxtShown, txt, length)}</p>
            {txt.length > length && showReadMore && (
                <p className="read-more-btn" onClick={onToggleLongTxt}>{isLongTxtShown ? ' Read Less' : ' Read More'}</p>
            )}
        </div>
    )
}