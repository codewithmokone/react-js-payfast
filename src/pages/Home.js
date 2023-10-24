import React from 'react'

function Home() {

    // const [formData, setFormData] = useState({
    //     // token: "dc0521d3-55fe-269b-fa00-b647310d760f",
    //     merchant_id: "10031519",
    //     merchant_key: "chicm4ug5ts86",
    //     amount: "100",
    //     item_name: "reading_classes",
    //     subscription_type: "1",
    //     recurring_amount: "100",
    //     frequency: "4",
    //     cycles: "4",
    //     signature: "73c6da10b94d5503e882a05768213e44",
    // });

    const formData = {
        "merchant_id": "10031519",
        "merchant_key": "chicm4ug5ts86",
        "amount": "100",
        "item_name": "reading_classes",
        "subscription_type": "1",
        "recurring_amount": "100",
        "frequency": "4",
        "cycles": "4",
        "signature": "73c6da10b94d5503e882a05768213e44",
    }

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    const handleSubscription = () => {

        // const subscriptionData = {
        //     merchant_id: formData.merchant_id,
        //     merchant_key: 
        //     subscription_type: formData.subscription_type,
        //     frequency: formData.frequency,
        //     cycles: formData.cycles,
        // };

        fetch('http://localhost:3000/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Failed to initiate subscription');
                }
            })
            .then((data) => {
                window.location.href = data.paymentUrl;
            })
            .catch((error) => {
                console.error('Subscription initiation failed:', error);
            });
    };

    return (
        <div>
            <p>Hello</p>
            <form action="http://localhost:3000/pay" method="post">
                <input type="hidden" name="merchant_id" value="10000100" />
                <input type="hidden" name="merchant_key" value="46f0cd694581a" />
                <input type="hidden" name="return_url" value="https://014d-41-150-219-68.ngrok-free.app/PaymentSuuccess" />
                <input type="hidden" name="cancel_url" value="https://014d-41-150-219-68.ngrok-free.app/Cancel" />
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

            <p>Subscription:</p>

            {/* <input type="hidden" name="merchant_id" value="10000100" />
                <input type="hidden" name="merchant_key" value="46f0cd694581a" />
                <input type="hidden" name="item_name" value="Test Product" />
                <input type="hidden" name="amount" value="100.00" />
                <input type="hidden" name="subscription_type" value="2" />
                <input type="hidden" name="billing_date" value="2020-01-01" />
                <input type="hidden" name="recurring_amount" value="123.45" />
                <input type="hidden" name="frequency" value="3" />
                <input type="hidden" name="cycles" value="12" />
                <input type="hidden" name="subscription_notify_email" value="true" />
                <input type="hidden" name="subscription_notify_webhook" value="true" />
                <input type="hidden" name="subscription_notify_buyer" value="true" /> */}
            <button onClick={handleSubscription}>Subscribe</button>

        </div>
    )
}

export default Home
