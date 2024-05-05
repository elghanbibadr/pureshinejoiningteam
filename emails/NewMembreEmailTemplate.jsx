import { Html,Body,Container,Tailwind, Text,Preview ,Heading} from "@react-email/components"
const NewMembreEmailTemplate = ({name,email,phoneNumber}) => {
  return (
    <Html>
        <Tailwind >
        <Preview  >We've Got a New Membre !</Preview>
          <Body className="bg-[#1B2430] text-white font-sans">
              <Container>
                <Text className='mx-auto mb-10 text-center text-xl'>New Membere Details </Text>
               <Text>Name :{name}</Text>
               <Text>Email :{email}</Text>
               <Text>Phone Number :{phoneNumber}</Text>
              </Container>
          </Body>
        </Tailwind>
    </Html>
  )
}

export default NewMembreEmailTemplate