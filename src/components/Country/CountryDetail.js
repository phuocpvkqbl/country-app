import './Country.css'
import * as commonHelper from '../../Helper/common'
function CountryDetail({ country }) {
    return (<>
        <div class='country-info-container'>
            <div>
                <img
                    src={country.flags.svg}
                    alt="Flag"
                    width="50" // Điều chỉnh chiều rộng của hình ảnh
                    height="30" // Điều chỉnh chiều cao của hình ảnh
                />
                <img
                    src={country.coatOfArms.svg}
                    alt="coatOfArms"
                    width="50" // Điều chỉnh chiều rộng của hình ảnh
                    height="30" // Điều chỉnh chiều cao của hình ảnh
                />
            </div>
            <h2>Thông tin về {country.name.common}</h2>
            <p>Thủ đô: {country.capital}</p>
            <p>Dân số: {commonHelper.formatByUnit(country.population)}</p>
            <p>Diện tích: {commonHelper.formatByUnit(country.area)} km2</p>
            <p>Ngôn ngữ chính thức: {Object.values(country.languages)[0]}</p>
            <p>Tiền tệ: {Object.values(country.currencies)[0].name}</p>
            <p>Châu lục: {country.continents[0]}</p>
            <p>Khu vực: {country.subregion}</p>
            <p>Múi giờ: {country.timezones.join(', ')}</p>
            <p>Mã điện thoại quốc gia: {`${country.idd.root}${country.idd.suffixes[0]}`}</p>
            <p>Tên miền Internet: {country.tld.join(", ")}</p>
            <p>Mã quốc gia: {country.cca3}</p>
            <p>
                Địa điểm trên bản đồ:{" "}
                <a
                    href={country.maps.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Xem trên Google Maps
                </a>
            </p>
        </div>
    </>)
}
export default CountryDetail 