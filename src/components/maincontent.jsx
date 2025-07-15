import "./maincontent.css";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";
import { fetchFromGitHub } from '../utils/request.jsx';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export default function MainContent({ url }) {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        if (url.startsWith("/view")) {
            fetchFromGitHub("Study Notes", filePath)
                .then((res) => res.text())
                .then(setMarkdown);
        } else {
            fetch(url)
                .then((res) => res.text())
                .then(setMarkdown);
        }
    }, [url]);

    return (
        <div className="MainContent">
            <div className="mdContainer markdown-body">
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                >{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
