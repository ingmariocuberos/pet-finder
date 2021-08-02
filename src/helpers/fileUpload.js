export const fileUpload = async(file) =>{

    const cloudUrl = 'https://api.cloudinary.com/v1_1/ddqpobmi7/upload';

    const formData = new FormData();

    formData.append('upload_preset', 'pet-finder');
    console.log(file);
    console.log(file[0]);

    formData.append('file', file[0]);

    try{

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        } );

        if( resp.ok ){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch(err){
        console.log(err);
    }
}