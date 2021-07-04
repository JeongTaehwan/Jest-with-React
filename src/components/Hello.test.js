import { render, screen } from '@testing-library/react';
import Hello from './Hello';

const user = {
    name: 'Tom',
    age: 18,
};

const user2 = {
    age: 20,
};

test("snapshot : name 있음", () => {
    const el = render(<Hello user={user} />);
    expect(el).toMatchSnapshot();
});

test("snapshot : name 없음", () => {
    const el = render(<Hello user={user2} />);
    expect(el).toMatchSnapshot();
});

test('"안녕하세요" 라는 글자가 포함됬는가?', () => {
    render(<Hello user={user} />); // render를 통해 Hello Components를 불러옴
    const helloEl = screen.getByText(/안녕하세요/i); // screen에서 '안녕하세요' 라는 텍스트가 있는지 확인
    expect(helloEl).toBeInTheDocument(); // toBeInTheDocument는 Document안에 방금 지정한 텍스트가 있는지 확인함
});