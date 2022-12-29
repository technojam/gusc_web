import React from 'react';

function ClubInfo() {
    return (
        <div>

            <div className='bg-red-700 p-12 text-center text-white'>
                <p className='text-4xl'>Galgotias University Student Council</p>
                <p className='text-7xl font-bold mt-2'>CLUBS</p>
            </div>

            <div className="p-20">
                <div className='flex items-center justify-between'>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/3022/d077/2c2096476a2f43ebbe482a605c207e33?Expires=1673222400&Signature=PJTpPitS~L3VF1GkoRncqYL0vqY3A80VO5rQYnvfIg9a44fCWredM5G1lLAVRxEk9fPmxVI6NDuRJFWNWv3dbZYkZBz0LrHYvncO7Jt1S3zQGaIy1If~Zdyppidg-tLO4qlzKsgwllnsaMOQyBwLx7I4gkS3PC5sH2CjKgMkx6Zg6Qq2LEhyyLjJU4dDBcpAPU1yWkz858OiuN1UsrKcOf7Or78DHnRXort58xUIShElJHVI6y6LEINMN0S62reoKGcOuCdN6k1F1M2XanFHR5-bXbQuqmsDg09~XBMs3AXer8BN~xoB4ELbHXUF-v6mubQQ61wWutmvvsdFZ7~PPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="sme"
                        width={200}
                        height={200}
                    />
                    <p className='text-4xl font-medium'>Graphex</p>
                    <div className='flex flex-col'>
                        <p className='text-center'>Club Heads</p>
                        <div className="flex">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/2c30/7dc1/269f27e3a895266a840c4169ed6f1ac0?Expires=1673222400&Signature=Jkk6zhlqCeYg~W~RcGZVKCp9ujunPOK2Twe76dNkKYgFG2apmbAydH6RtaIpV2~Dt3xwLBVIwRIF~qP5PNmKlha~UWut1ySvPKS4RCelIMeeyhw0WsLKNQjHADHsV0wpRf7TuQyQnrbjwUBkpPmpzID3SL3IbPaZU8tqmfRf-2dJH~BwcIPbQUFJbCsU0xaXe3z9Q8Pxmnc9m1pETZDEzKrclNMI5Auk5sNOwNr9mvB1Ux5CNvumKGQRJyoGfo4qlXBOFDtBybdCcCnjZNtJg7pDun9gcjujhpV15pc88ZHoRaLdC-~paTCqWSefrNnaRfP2XqmjtUksyEi3uwJZig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                alt="sme"
                                width={100}
                                height={100}
                            />
                            <img
                                src="https://s3-alpha-sig.figma.com/img/2c30/7dc1/269f27e3a895266a840c4169ed6f1ac0?Expires=1673222400&Signature=Jkk6zhlqCeYg~W~RcGZVKCp9ujunPOK2Twe76dNkKYgFG2apmbAydH6RtaIpV2~Dt3xwLBVIwRIF~qP5PNmKlha~UWut1ySvPKS4RCelIMeeyhw0WsLKNQjHADHsV0wpRf7TuQyQnrbjwUBkpPmpzID3SL3IbPaZU8tqmfRf-2dJH~BwcIPbQUFJbCsU0xaXe3z9Q8Pxmnc9m1pETZDEzKrclNMI5Auk5sNOwNr9mvB1Ux5CNvumKGQRJyoGfo4qlXBOFDtBybdCcCnjZNtJg7pDun9gcjujhpV15pc88ZHoRaLdC-~paTCqWSefrNnaRfP2XqmjtUksyEi3uwJZig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                alt="sme"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex p-12 gap-12">
                    <div className='w-7/12'>
                        <p className='text-justify'>
                            Graphex has been extensively working as a backbone for the Galgotias Student Council and has been collaborating with clubs to make their events successful in every manner of creativity. The team has been providing all the clubs with all the necessities like Posters, Videos, Banners, Certificates, Logos, and a lot more stuff. Graphex has always been committed to its work in all major aspects of design. No matter whatever the mode is offline or online, Graphex has always been active. Graphex has been always involved in almost every event as it has been contributing, all types of design. It has not only been responsible for creating all the creatives and video content but also has been into educating and facilitating the knowledge in its niche at a huge level and participation in its workshops.
                        </p>
                    </div>
                    <div className='w-5/12 bg-slate-300'>
                        {/* <img
                            src=""
                            alt="banner"
                            height={800}
                        /> */}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ClubInfo;;