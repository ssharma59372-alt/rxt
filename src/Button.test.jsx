import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('renders button with default props', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('btn');
    expect(button).toHaveClass('btn-primary');
    expect(button).toHaveClass('btn-medium');
    expect(button).not.toBeDisabled();
    expect(button).toHaveAttribute('type', 'button');
  });

  test('applies primary variant class', () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });

  test('applies secondary variant class', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-secondary');
  });

  test('applies danger variant class', () => {
    render(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-danger');
  });

  test('applies small size class', () => {
    render(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-small');
  });

  test('applies medium size class', () => {
    render(<Button size="medium">Medium</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-medium');
  });

  test('applies large size class', () => {
    render(<Button size="large">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-large');
  });

  test('button can be disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('disabled');
  });

  test('sets button type correctly', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('accepts custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
    expect(screen.getByRole('button')).toHaveClass('btn');
  });

  test('passes through additional props', () => {
    render(
      <Button 
        data-testid="custom-button"
        aria-label="Custom Button"
        id="button-1"
      >
        Props Test
      </Button>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-testid', 'custom-button');
    expect(button).toHaveAttribute('aria-label', 'Custom Button');
    expect(button).toHaveAttribute('id', 'button-1');
  });
});