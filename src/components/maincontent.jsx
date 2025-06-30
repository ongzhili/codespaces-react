import './maincontent.css'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown.css'

export default function MainContent() {
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        fetch('/src/content/articles/welcomepage.md')
            .then(res => res.text())
            .then(setMarkdown)
    }, [])

    return (
        <div className="MainContent">
            <div className="markdown-body">
            <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    )
}