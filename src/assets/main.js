const API = 'https://youtube-v3-alternative.p.rapidapi.com/search?query=the%20big%20bang%20theory&geo=US&lang=en&type=video';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '670c3b13b8mshb4f1cbb3b16ea15p1ec631jsn95a048962ada',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        const videosFor = videos.data;
        console.log(videosFor);
        let view = `
        ${videosFor.map(video => `
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.thumbnail[0].url}" alt="${video.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.title}
            </h3>
            </div>
        </div>
        `).slice(0, 8).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();