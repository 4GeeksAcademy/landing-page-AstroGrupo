import './Input.css';

export const Input = () => {
    return (
        <>
            <div className='input'>
                <div className='info'>
                    <form class="row g-3">
                        <div class="col-12">
                            <label for="inputName" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="inputName" placeholder="1234 Main St" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputphoneNumber" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" id="inputphoneNumber" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark">Send Distress Beacon</button>
                        </div>
                    </form>
                </div>
                <div className='picture'></div>
                <div>
                <img class="pic2" src="/img/stardust.png" alt="pics" />
                </div>
                <div>
                    <img class="pic1" src="/img/Astrofile.png" alt="pic" />
                </div>
                <div>
                    <img class="pic3" src="/img/cometstar.png" alt="picr" />
                </div>
            </div>
        </>

    );
};