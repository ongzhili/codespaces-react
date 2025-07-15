import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const GITHUB_API_URL =
    "https://api.github.com/repos/ongzhili/Study-Notes/contents/";

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
                        <Link to={`/view/${encodeURIComponent(node.path)}`}>
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
            <h3>Study Notes</h3>
            <Tree nodes={tree} />
        </div>
    );
}
