export default class View {
    #track = document.getElementById("image-track")
    

    handleOnDown = e => this.#track.dataset.mouseDownAt = e.clientX

    handleOnUp = () => {
        this.#track.dataset.mouseDownAt = "0";  
        this.#track.dataset.prevPercentage = this.#track.dataset.percentage
    }

    handleOnMove = e => {
        if(this.#track.dataset.mouseDownAt === "0") return;
    
        const mouseDelta = parseFloat(this.#track.dataset.mouseDownAt) - e.clientX,
                maxDelta = window.innerWidth / 2
        
        const percentage = (mouseDelta / maxDelta) * -100,
                nextPercentageUnconstrained = parseFloat(this.#track.dataset.prevPercentage) + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)
        
        this.#track.dataset.percentage = nextPercentage
        
        this.#track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" })
        
        for(const image of this.#track.getElementsByClassName("image")) {
            image.animate({
            objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" })
        }
    }
}
