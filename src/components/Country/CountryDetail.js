import './Country.css'
import * as commonHelper from '../../Helper/common'
import { useTranslation } from 'react-i18next'
function CountryDetail({ data }) {
    const { t } = useTranslation()
    return (<>
        <div class='country-info-container'>
            <div>
                <img
                    src={data.flag}
                    alt="Flag"
                    width="50" // Điều chỉnh chiều rộng của hình ảnh
                    height="30" // Điều chỉnh chiều cao của hình ảnh
                />
                <img
                    src={data.coatOfArm}
                    alt="coatOfArms"
                    width="50" // Điều chỉnh chiều rộng của hình ảnh
                    height="30" // Điều chỉnh chiều cao của hình ảnh
                />
            </div>
            <h2>Thông tin về {data.name}</h2>
            <p>{t('countryDetail.capital')}: {data.capital}</p>
            <p>Dân số: {commonHelper.formatByUnit(data.population)}</p>
            <p>Diện tích: {commonHelper.formatByUnit(data.area)} km2</p>
            <p>Ngôn ngữ chính thức: {data.mainLang}</p>
            <p>Tiền tệ: {data.mainCurrency}</p>
            <p>Châu lục: {data.continent}</p>
            <p>Khu vực: {data.subRegion}</p>
            <p>Múi giờ: {data.timezones.join(', ')}</p>
            <p>Mã điện thoại quốc gia: {data.callingCode}</p>
            <p>Tên miền Internet: {data.domains.join(", ")}</p>
            <p>
                Địa điểm trên bản đồ:{" "}
                <a
                    href={data.googleMaps}
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