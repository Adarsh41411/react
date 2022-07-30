import axios from 'axios';
import React, { Component } from 'react';
class Browse extends Component {

    state = {


        selectedFile: null
    };


    onFileChange = event => {

        this.setState({ selectedFile: event.target.files[0] });
    };


    onFileUpload = () => {

        const formData = new FormData();


        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );


        console.log(this.state.selectedFile);


        axios.post("api/uploadfile", formData);
    };


    fileData = () => {
        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    { }
                </div>
            );
        } else {
            return (
                <div>


                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <h1>
                    Upload
                </h1>

                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default Browse; 