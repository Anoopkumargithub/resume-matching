const{generateResume} = require('../services/createResume');
const createResume = async(req, res) => {
    try {
        console.log('Received form data:', req.body);
        const formData = req.body;        
        // Send the data to generateResume function
        const resume = await generateResume({ formData });
        // res.status(200).json(resume);
        console.log('Generated resume:', resume);

        // Process the form data here (e.g., store in the database)
        
        res.status(200).json({ success: true, message: 'Form data received successfully', resume });
    } catch (error) {
        console.error('Error processing form data:', error);
        res.status(500).json({ success: false, message: 'Error processing form data', error });
    };
};

module.exports = { createResume };
