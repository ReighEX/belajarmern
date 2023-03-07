import React from "react";

export default class FormElement extends React.Component {
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    }

    handleSubmit = (a) => {
        a.preventDefault();
        alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.anggota ? 'Ya' : 'Nah'}
        `);
        this.setState({ 
            nama: '',
            jurusan: '',
            gender: '',
            alamat: '',
            member: false})
    }
    render(){
     return(
        <div style={{margin: '50px auto', border: '0.5px solid gray', padding: '10px'}}>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nama : <input type="text" 
                    name="nama" 
                    onChange={ a => this.setState({nama: a.target.value})}
                    defaultValue={this.state.nama}
                    />
                </label>
                <br/>
                <label>
                    Jurusan : <select 
                    name="jurusan" 
                    onChange={ a => this.setState({jurusan: a.target.value})}>
                        <option value="">Pilih Jurusan</option>
                        <option value="IT">IT</option>
                        <option value="SI">SI</option>
                        <option value="DKV">DKV</option>
                    </select>
                    </label>
                    <label>
                        <br/>
                        Jenis Kelamin : 
                        <input type="radio" value="Lelaki" name="gender" 
                        onChange={ a => this.setState({gender: a.target.value})}/> Lelaki
                        <input type="radio" value="Perempuan" name="gender"
                        onChange={ a => this.setState({gender: a.target.value})}/> Perempuan
                </label>
                <br/>
                <label>
                    Alamat: <textarea cols="15" rows="5" name="alamat"
                    onChange={ a => this.setState({alamat: a.target.value})} value={this.state.alamat}/>
                </label>
                <br/>
                <label>
                    Member: <input type="checkbox" value={true} name="anggota"
                    onChange={ a => this.setState({anggota: a.target.checked})}/>
                </label>
                <br/>
                <button type="submit">Kirim</button>
            </form>

        </div>

     )
    }
}