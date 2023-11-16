import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <footer>
            <hr />
            <Image src='/footer.png' width={80} height={100} alt="ejd" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <p style={{ marginRight: '20px' }}><i class="fa-solid fa-location-dot"></i>locationxxxxxxxxxx</p>
                <p><i class="fa-solid fa-envelope"></i>hi@ahead-app.com</p>
            </div>
            <Image
                src="/appleStoreIcon.svg"
                alt="download applestore"
                width={150}
                height={150}
            />
            <br /><br />
            &copy;2023 Ahead app.All rights reserved
        </footer>
    );
}
export default Footer;