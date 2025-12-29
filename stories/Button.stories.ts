import type { Meta, StoryObj } from "@storybook/html-vite";

interface ButtonProps {
  label: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const createButton = ({
  label,
  primary = false,
  size = "medium",
}: ButtonProps): HTMLButtonElement => {
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = label;

  const sizeStyles = {
    small: "padding: 8px 16px; font-size: 12px;",
    medium: "padding: 12px 24px; font-size: 14px;",
    large: "padding: 16px 32px; font-size: 16px;",
  };

  button.style.cssText = `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 600;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    ${sizeStyles[size]}
    ${
      primary
        ? "background-color: #5c6ac4; color: white;"
        : "background-color: #f4f5f7; color: #333;"
    }
  `;

  return button;
};

const meta: Meta<ButtonProps> = {
  title: "Example/Button",
  tags: ["autodocs"],
  render: (args) => createButton(args),
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
