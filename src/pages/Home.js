import React from 'react'

function Home() {
    return (
        <div>
            <p>Hello</p>
            <form action="http://localhost:3000/pay" method="post">
                <input type="hidden" name="merchant_id" value="10000100" />
                <input type="hidden" name="merchant_key" value="46f0cd694581a" />
                <input type="hidden" name="return_url" value="http://localhost:3000/success" />
                <input type="hidden" name="cancel_url" value="https://www.example.com/cancel" />
                <input type="hidden" name="notify_url" value="https://www.example.com/notify" />
                <input type="hidden" name="amount" value="100.00" />
                <input type="hidden" name="item_name" value="Test Product" />
                {/* <input type="hidden" name="signature" value="f103e22c0418655fb03991538c51bfd5" /> */}
                <input type="hidden" name="m_payment_id" value="01AB" />
                <input type="hidden" name="item_description" value="A test product" />
                <input type="hidden" name="custom_int1" value="2" />
                <input type="hidden" name="custom_str1" value="Extra order information" />

                <input type="submit" value="Check Out" />
            </form>
        </div>
    )
}

export default Home
