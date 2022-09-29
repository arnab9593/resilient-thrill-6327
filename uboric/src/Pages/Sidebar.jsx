import { Box, Divider, Heading, Image, Input, Select, Spacer, Stack, Text } from "@chakra-ui/react"

const Sidebar = () => {
    return (
        <div>

            <Box border='1px solid red' width='310px' ml='20' marginTop="1px" padding="20px">
                <Box mt='5'>
                    <Box display='flex' gap='1'>
                        <Select placeholder='Price'>
                            <option value='option1'>1 - 499.00</option>
                            <option value='option2'>500.00 - 999.00</option>
                            <option value='option3'>1,000.00+</option>
                        </Select>
                    </Box>
                    <Box mt='5'>
                        <Select placeholder='Price' display="block">
                            <option value='option1'>1 - 499.00</option>
                            <option value='option2'>500.00 - 999.00</option>
                            <option value='option3'>1,000.00+</option>
                        </Select>
                        <Input placeholder="Search Brand"></Input>
                    </Box>
                    <Spacer />
                    <Divider />
                    <Spacer />
                </Box>
                <Box mt='15%'>
                    <Box display='flex' gap='1' >
                        {/* <Input type='checkbox' w='5' h='5' border='2px solid Black' /> */}
                        {/* <Text> Sales Times(931) </Text> */}
                        <Select placeholder='Price'>
                            <option value='option1'>1 - 499.00</option>
                            <option value='option2'>500.00 - 999.00</option>
                            <option value='option3'>1,000.00+</option>
                        </Select>
                    </Box>
                    <Box display='flex' gap='1' width='200px' ml='5'>
                        {/* <Input type='checkbox' w='5' h='5' border='2px solid' /> */}
                        {/* <Text>Shipping Offer(564) </Text> */}

                        {/* ........................size section .......................... */}
                    </Box>
                    <Stack spacing={3} mt='5'>
                        <Select placeholder='Price' display="block">
                            <option value='option1'>1 - 499.00</option>
                            <option value='option2'>500.00 - 999.00</option>
                            <option value='option3'>1,000.00+</option>
                        </Select>
                    </Stack>
                </Box>
            </Box>

            <Spacer />
        </div>
    )
}

export default Sidebar