import { Header } from '@/components/Header/Header';
import { Tenders } from '@/components/Tenders/Tenders';
import { Container, rem } from '@mantine/core';

export default function TendersPage() {
  return (
    <>
      <Header></Header>
      <Container size="md" style={{ marginTop: rem(60) }}>
        <Tenders></Tenders>
      </Container>
    </>
  );
}
