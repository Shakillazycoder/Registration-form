import { Envelope, Lock } from "phosphor-react";
import { Button, Icon, Input, Label } from "keep-react";
import { useState } from "react";
import { Check } from "phosphor-react";
import { Modal, Typography } from "keep-react";
import { Checkbox } from "keep-react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      return;
    }
    const user = {
      name: name,
      email: email,
      password: password,
    };
    console.log(user);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-fuchsia-400">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md bg-white"
        >
          <fieldset className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <Input
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="name">Email</Label>
            <div className="relative">
              <Input
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
                className="ps-11"
                required
              />
              <Icon>
                <Envelope size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                onChange={(event) => setPassword(event.target.value)}
                id="password"
                placeholder="Enter password"
                type="password"
                className="ps-11"
                required
              />
              <Icon>
                <Lock size={19} color="#AFBACA" />
              </Icon>
            </div>
            <fieldset
              onChange={(event) => setIsChecked(event.target.checked)}
              className="flex items-center gap-2"
            >
              <Checkbox />
              <Label htmlFor="checkbox">
                Do you agree with ours{" "}
                <span className="underline text-red-500">
                  terms & conditions?
                </span>
              </Label>
            </fieldset>
          </fieldset>
          <Button size="md" color="primary" type="submit">
            Log In
          </Button>
        </form>

        {/* Modal section */}
        {isOpen && (
          <Modal isOpen={isOpen} title="Login" onClose={() => setIsOpen(false)}>
            <Modal.Body className="flex flex-col  items-center">
              <Modal.Icon className="h-20 w-20 bg-success-50 text-success-500">
                <Check size={60} />
              </Modal.Icon>
              <Modal.Content className="my-4 text-center">
                <Typography
                  variant="h3"
                  className="mb-2 text-body-1 font-bold text-metal-900"
                >
                  Login Successfully
                </Typography>
                <Typography
                  variant="p"
                  className="text-body-4 font-semibold text-xl text-metal-600"
                >
                  <p>Name: {name}</p>
                  <p>Email: {email}</p>
                  <p>Password: {password}</p>
                </Typography>
              </Modal.Content>
              <Modal.Footer>
                <Button
                  size="md"
                  color="primary"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Registration;
