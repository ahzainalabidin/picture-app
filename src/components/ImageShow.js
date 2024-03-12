function ImageShow({ image }) {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_descr} />
        </div>
    );
}

export default ImageShow;
