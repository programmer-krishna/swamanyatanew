<Form action="#">
<Row className="g-3">
    <Col lg={6}>
        <div className="form-floating">
            <Input type="text" className="form-control" id="firstnamefloatingInput" placeholder="Enter your firstname"/>
            <Label htmlFor="firstnamefloatingInput">First Name</Label>
        </div>
    </Col>
    <Col lg={6}>
        <div className="form-floating">
            <Input type="text" className="form-control" id="lastnamefloatingInput" placeholder="Enter your Lastname"/>
            <Label htmlFor="lastnamefloatingInput">Last Name</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div className="form-floating">
            <Input type="email" className="form-control" id="emailfloatingInput" placeholder="Enter your email"/>
            <Label htmlFor="emailfloatingInput">Email Address</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div className="form-floating">
            <Input type="password" className="form-control" id="passwordfloatingInput" placeholder="Enter your password"/>
            <Label htmlFor="passwordfloatingInput">Password</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div className="form-floating">
            <Input type="password" className="form-control" id="passwordfloatingInput1" placeholder="Confirm password"/>
            <Label htmlFor="passwordfloatingInput1">Confirm Password</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div className="form-floating">
            <Input type="text" className="form-control" id="cityfloatingInput" placeholder="Enter your city"/>
            <Label htmlFor="cityfloatingInput">City</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div className="form-floating">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option >Choose...</option>
              <option defaultValue="1">USA</option>
              <option defaultValue="2">Brazil</option>
              <option defaultValue="3">France</option>
              <option defaultValue="4">Germany</option>
            </select>
            <Label htmlFor="floatingSelect">Country</Label>
        </div>
    </Col>
    <Col lg={4}>
        <div className="form-floating">
            <Input type="number" className="form-control" id="zipfloatingInput" placeholder="Enter your zipcode"/>
            <Label htmlFor="zipfloatingInput">Zipcode</Label>
        </div>
    </Col>
    <Col lg={12}>
        <div className="text-end">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </Col>
</Row>
</Form>