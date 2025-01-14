

function getGiscusTheme() {
    return document.querySelector('html').dataset['theme'] ;
}

function setGiscusTheme() {
    function sendMessage(message) {
        const iframe = document.querySelector('iframe.giscus-frame');
        if (!iframe) return;
        iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }
    sendMessage({
        setConfig: {
            theme: getGiscusTheme(),
        },
    });
}



function initGiscus(repo,repoId,category,categoryId,src,mapping,strict,reactions,emitMetadata,inputPosition,theme,lang) {

    const giscusAttributes = {
        
        "src": src?? "https://giscus.app/client.js",
        "data-repo": repo ,
        "data-repo-id": repoId,
        "data-category": category,
        "data-category-id": categoryId,
        "data-mapping": mapping??"pathname",
        "data-strict": strict??"0",
        "data-reactions-enabled": reactions??"1",
        "data-emit-metadata": emitMetadata??"0",
        "data-input-position": inputPosition??"bottom",
        "data-theme": theme??getGiscusTheme(),
        "data-lang": lang?? "zh-CN",
        "crossorigin": "anonymous",
        "async": "",
    };

    // Dynamically create script tag
    const giscusScript = document.createElement("script");
    Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));


    // Append the script tag to the <article> element
    document.querySelector('#giscus').appendChild(giscusScript);
    if (theme) {
        return
    }
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                setGiscusTheme()
            }
        });
    });
    
    observer.observe(document.querySelector('html'),{attributes:true})
}

