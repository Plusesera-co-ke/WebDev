(function () {

    // function to handle hover events for the navbar
    function navjs() {
        let items = document.getElementsByClassName('hover-plain');

        // add listeners for each elememt with class 'hover-plain'
        for (let i = 0; i < items.length ;i++){
            items[i].addEventListener('mouseover', mouseover,true);
            items[i].addEventListener('mouseout', mouseout, false);
        }

        // function to handle mouseover events
        function mouseover() {

            let carret_div = document.createElement('div');
            let carret_img = document.createElement('img');

            carret_div.setAttribute('class', 'text-center container');
            carret_div.setAttribute('id', 'second-div');

            carret_img.setAttribute('src', 'img/up_carret.png');
            carret_img.setAttribute('class', 'img-fluid');

            carret_div.appendChild(carret_img);

            let div = document.createElement("div");

            div.setAttribute('class', 'container-fluid bg-orange position-relative');
            div.style.height = '4px';

            this.appendChild(carret_div);
            this.appendChild(div);

        }

        // function to handle mouseout events
        function mouseout() {
            this.removeChild(this.lastChild);
            let second_div = document.getElementById('second-div');
            second_div.parentNode.removeChild(second_div);
        }
    }

    navjs()
})();