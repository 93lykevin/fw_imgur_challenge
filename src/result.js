module.exports = (r) => {
    return `<div class="card">
        <a href=${r.link}>
                <div class="image">
                        <img class="item-img card-img-top" src="https://i.imgur.com/${
                            r.is_album ? r.cover : r.id
                        }b.jpg">
                    
                </div>
                <div class="card-body">
                    <h5 class="card-title">${r.title}</h5>
                </div>
            </a>
        </div>`;
};
