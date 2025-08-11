import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const GITHUB_API_URL =
    "https://api.github.com/repos/ongzhili/Study-Notes/contents/";

const LOGO_URL = `${import.meta.env.BASE_URL}content/images/portrait.png`;

function SocialLinks() { // CHANGED
    return ( // CHANGED
        <div className="SidebarSocials">
            <a href="https://github.com/ongzhili" target="_blank" rel="noopener noreferrer">
                <img src={`${import.meta.env.BASE_URL}content/images/github-mark-white.svg`} alt="GitHub" className="SidebarSocialIcon" />
            </a>
            <a href="https://www.linkedin.com/in/ong-zhili/" target="_blank" rel="noopener noreferrer">
                <img src={`${import.meta.env.BASE_URL}content/images/linkedin.png`} alt="LinkedIn" className="SidebarSocialIcon" />
            </a>
            {/* Add more socials as needed */}
        </div>
    );
} // CHANGED


async function fetchTree(url) {
    const res = await fetch(url);
    const data = await res.json();
    let tree = [];

    for (const item of data) {
        if (item.type === "file" && item.name.endsWith(".md")) {
            tree.push({ type: "file", name: item.name, path: item.path });
        } else if (item.type === "dir") {
            const children = await fetchTree(item.url);
            if (children.length > 0) {
                tree.push({ type: "dir", name: item.name, children });
            }
        }
    }
    return tree;
}

function Tree({ nodes }) {
    if (!nodes) return null;
    return (
        <ul className="SidebarTree">
            {nodes.map((node) =>
                node.type === "file" ? (
                    <li key={node.path} className="SidebarFile">
                        <Link to={`view/${encodeURIComponent(node.path)}`}>
                            {node.name}
                        </Link>
                    </li>
                ) : (
                    <li key={node.name} className="SidebarFolder">
                        <span className="SidebarFolderName">{node.name}</span>
                        <Tree nodes={node.children} />
                    </li>
                )
            )}
        </ul>
    );
}

export default function Sidebar() {
    const [tree, setTree] = useState([]);

    useEffect(() => {
        fetchTree(GITHUB_API_URL).then(setTree);
    }, []);

    return (
        <div className="Sidebar">
            <div className="SidebarProfile"> 
                <img src={LOGO_URL} alt="Logo" className="SidebarLogo" /> 
                <SocialLinks /> 
            </div> 
            <h3>Study Notes</h3>
            <Tree nodes={tree} />
        </div>
    );
}
