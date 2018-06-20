import React from 'react'
import './SingUpForm.css'

class SingUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
        }
    }

    handleChange = (valorDoInput) => {
        this.setState({
            email: valorDoInput
        })
    }

    render = () => {
        return (
            <div id="mc_embed_signup">
                <form action="https://doutrolado.us18.list-manage.com/subscribe/post?u=0d355dedd6335a20a7d3a2645&amp;id=a6e092e5df" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <div className="mc-field-group">
                            <input onchange={this.handleChange} placeholder="Digite seu email" type="email" value={this.state.email} name="EMAIL" className="required email" id="mce-EMAIL" />
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" ></div>
                            <div className="response" id="mce-success-response"></div>
                        </div>    
                        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                        {/* <div className="form_singup" aria-hidden="true">
                            <input type="text" name="b_0d355dedd6335a20a7d3a2645_a6e092e5df" tabindex="-1" value="" />
                        </div> */}
                        <div className="clear">
                            <input type="submit" value="Cadastrar" name="subscribe" id="mc-embedded-subscribe" className="button" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingUpForm