    console.log('about to fetch a rainbow');

        const files = ['image2.jfif','peacock.jpg', 'rainbow.jpg'];

        uploadFiles(files)
        .then(response =>{
            console.log('uploading rainbow files');
        })
        .catch(error =>{
            console.log('Error!');
            console.log(error);
        });

        async function uploadFiles(files){
            for(let file of files){
                const response = await fetch(file);
                const blob = await response.blob();
                const img = document.createElement('img');
                img.src = URL.createObjectURL(blob);
                img.width = '200';
                img.height = '200';
                document.body.append(img);
            }
        }