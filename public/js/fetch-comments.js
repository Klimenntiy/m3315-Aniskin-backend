document.addEventListener("DOMContentLoaded", () => {
    const commentsList = document.getElementById("comments-list");
    const preloader = document.getElementById("preloader");
    const errorBox = document.getElementById("error");

    function loadComments(filter = "high") {
        commentsList.innerHTML = "";
        errorBox.textContent = "";
        preloader.style.display = "block";

        const url = "https://jsonplaceholder.typicode.com/comments";

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ошибка сети");
                }
                return response.json();
            })
            .then(data => {
                let filtered = data;

                if (filter === "high") {
                    filtered = data.filter(c => c.id >= 50);
                } else if (filter === "low") {
                    filtered = data.filter(c => c.id <= 20);
                }

                commentsList.innerHTML = filtered.map(c => `
                    <div class="comment-card">
                        <p><strong>${c.name}</strong> (${c.email})</p>
                        <p>${c.body}</p>
                    </div>
                `).join("");
            })
            .catch(() => {
                errorBox.textContent = "Что-то пошло не так. Попробуйте позже.";
            })
            .finally(() => {
                preloader.style.display = "none";
            });
    }

    loadComments("high");

    document.querySelectorAll(".controls button").forEach(btn => {
        btn.addEventListener("click", () => {
            loadComments(btn.dataset.filter);
        });
    });
});