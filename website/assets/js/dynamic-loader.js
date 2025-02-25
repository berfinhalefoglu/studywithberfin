// JSON Verisini Yükleme
fetch('./assets/json/courses.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('courses-container');
        const title = document.createElement('h1');
        title.textContent = data.courseName;
        container.appendChild(title);

        data.topics.forEach(topic => {
            const topicDiv = document.createElement('div');
            topicDiv.classList.add('topic');

            const topicTitle = document.createElement('h2');
            topicTitle.textContent = topic.name;
            topicDiv.appendChild(topicTitle);

            const subtopicList = document.createElement('ul');
            topic.subtopics.forEach(sub => {
                if (typeof sub === 'string') {
                    const listItem = document.createElement('li');
                    listItem.textContent = sub;
                    subtopicList.appendChild(listItem);
                } else {
                    const listItem = document.createElement('li');
                    listItem.textContent = sub.name;
                    const detailsList = document.createElement('ul');
                    sub.details.forEach(detail => {
                        const detailItem = document.createElement('li');
                        detailItem.textContent = detail;
                        detailsList.appendChild(detailItem);
                    });
                    listItem.appendChild(detailsList);
                    subtopicList.appendChild(listItem);
                }
            });

            topicDiv.appendChild(subtopicList);
            container.appendChild(topicDiv);
        });
    })
    .catch(err => console.error('JSON Veri Yüklenirken Hata:', err));
