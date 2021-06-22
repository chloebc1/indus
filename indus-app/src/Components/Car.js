const Car = ({year, make, model, image, price}) => (
    <div style={{display: 'flex', height: '200px', alignItems: 'center', paddingRight: '16px'}}>
        <img src={image} alt={model} style={{height: '100%'}}/>
        <div className="summary" style={{textAlign: 'left', minWidth: '300px', padding: '0 16px'}}>
            <div style={{marginBottom: '20px'}}><b>${price}</b></div>
            <div>Make: {make}</div>
            <div>Model: {model}</div>
            <div>Year: {year}</div>
        </div>
        <button style={{
            marginLeft: 'auto',
            height: '50px',
            width: '120px',
            border: '2px solid #1D3354',
            backgroundColor: '#D64045',
            color: 'white',
            padding: '16px',
            borderRadius: '4px'
        }}>Buy</button>
    </div>
)

export default Car;