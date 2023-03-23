
export const GifItem = ({url, id, title}) => {



  return (
    <div className="card">
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
