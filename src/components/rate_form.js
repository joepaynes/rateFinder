import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Rate_NZPOSTdom } from '../actions';


class RateForm extends Component {

    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }
    
    
    
    onSubmit(data) {
        // let param = `&thickness=${data.thickness}&length=${data.length}&weight=${data.weight}&height=${data.height}`
        this.props.Rate_NZPOSTdom(data)
        //     , () =>{this.props.history.push('/rateDisplay');
        // });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Thickness (mm)"
                    name="thickness"
                    component={this.renderField}
                />
                <Field
                    label="Length (mm)"
                    name="length"
                    component={this.renderField}
                />
                <Field
                    label="Weight"
                    name="weight"
                    component={this.renderField}
                />
                <Field
                    label="Height (mm)"
                    name="height"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'NZPostDom'
})(
    connect(null, { Rate_NZPOSTdom })(RateForm)
);