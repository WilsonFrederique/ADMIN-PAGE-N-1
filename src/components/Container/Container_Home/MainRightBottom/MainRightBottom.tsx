import React from 'react';
import TopSeller from './TopSeller';

const MainRightBottom = () => {
  return (
    <div className='bottomRightCard'>
        <div className="bottomName">
            <h2>Top Sellers</h2>
            <a href="#">View More</a>
        </div>

        {TopSeller.map((seller) => (
            <div key={seller.id} className="topSeller">
                <div className="topSellerImg">
                    <img src={seller.image} alt={seller.seller_name} />
                </div>

                <p className="topSellerName">
                    {seller.seller_name} <span>{seller.username}</span>
                </p>

                <a href="#" className="button1 btn">Follow</a>
            </div>
        ))}
    </div>
  );
};

export default MainRightBottom;
