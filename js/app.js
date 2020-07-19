(() => {

    const boxes = document.querySelectorAll(".box"),

        dropZones = document.querySelectorAll(".dropZone");


    function allowDrag(event) {
        console.log('started dragging an image: this one - ', event.target.id);

        event.dataTransfer.setData('draggedImg', this.id);


    }

    function allowDragOver(event) {
        event.preventDefault();
        console.log('dragged something over me');

    }

    function allowDrop(event) {
        console.log('dropped something on me');
        let droppedImage = event.dataTransfer.getData('draggedImg');

        if (event.currentTarget.children.length !== 0) {
            return;
        }


        event.target.appendChild(document.querySelector(`#${droppedImage}`));

        console.log(event.target)

        let audio = document.querySelector(`audio[data-sound="${droppedImage}"]`)

        if (!audio) { return; }

        audio.currentTime = 0;
        audio.loop = true;
        audio.play();

    }

    for (let zone of dropZones) {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
    }


  boxes.forEach(box => box.addEventListener('dragstart', allowDrag));


})();
