import { useRef, useState } from "react"

export function ChatApp({ watchedUser, setIsFirstMsg, onAddFirstMsg }) {
    const [initScreen, setInitScreen] = useState(true)
    const [message, setMessage] = useState('')
    const textareaRef = useRef(null)
    const characterCount = message.length

    function getFirstName(name) {
        const string = name.split(' ')
        return string[0]
    }

    function addMessage(newMessage) {
        setMessage(newMessage)

        if (textareaRef.current) {
            textareaRef.current.focus()
        }
    }

    return (
        <section className="chat-app">
            <div className="chat-header">
                <span className="exit-chat-btn"><i className="fa-solid fa-x"></i></span>
                <div className="chat-user-details flex">
                    <img src={watchedUser.imgUrl} alt="user-img" />
                    <div className="chat-user-data flex">
                        <span className="msg-username">Message {getFirstName(watchedUser.fullname)}</span>
                        <span className="avg-res-time">Avg. response time: <span>1 Hour</span></span>
                    </div>
                </div>
            </div>

            <div className="chat-msg">
                {initScreen ? <>
                    <textarea
                        className="text-msg"
                        maxLength="500"
                        value={message}
                        ref={textareaRef}
                        onChange={(ev) => setMessage(ev.target.value)}
                        placeholder={`Ask ${getFirstName(watchedUser.fullname)} a question or share your project details (requirements, timeline, budget, etc.)`}>
                    </textarea>
                    <div className="quick-msg flex">
                        <button onClick={() => addMessage(`👋 Hey ${getFirstName(watchedUser.fullname)}, can you help me with `)}>👋 Hey  {getFirstName(watchedUser.fullname)}, can you help me with...</button>
                        <button onClick={() => addMessage("Would it be possible to get a custom offer for ")}>Would it be possible to get a custom offer for...</button>
                        <button onClick={() => addMessage("Do you think you can deliver an order by ")}>Do you think you can deliver an order by...</button>
                    </div>

                    <div className="text-footer flex">
                        <div className="letter-count">
                            {characterCount}/500
                        </div>
                    </div>
                </>
                    :
                    <div>You: {message}</div>
                }
            </div>

            <div className="chat-app-footer flex">
                <div className="attach">
                    <i class="fa-solid fa-paperclip"></i>
                </div>
                <div className="submit-btn">
                    <button onClick={() => { setInitScreen(false); setIsFirstMsg(false); onAddFirstMsg(message) }} disabled={!characterCount} className={`${characterCount ? 'active' : ''}`}> <span className="paper-icon"><i class="fa-regular fa-paper-plane"></i> </span>Send message</button>
                </div>
            </div>
        </section>
    )
}